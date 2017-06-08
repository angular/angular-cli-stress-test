/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3679Component } from './comp-3679.component';

describe('Comp3679Component', () => {
  let component: Comp3679Component;
  let fixture: ComponentFixture<Comp3679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
