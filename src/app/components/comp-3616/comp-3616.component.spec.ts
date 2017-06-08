/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3616Component } from './comp-3616.component';

describe('Comp3616Component', () => {
  let component: Comp3616Component;
  let fixture: ComponentFixture<Comp3616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
