/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3765Component } from './comp-3765.component';

describe('Comp3765Component', () => {
  let component: Comp3765Component;
  let fixture: ComponentFixture<Comp3765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
