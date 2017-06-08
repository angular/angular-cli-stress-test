/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3443Component } from './comp-3443.component';

describe('Comp3443Component', () => {
  let component: Comp3443Component;
  let fixture: ComponentFixture<Comp3443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
