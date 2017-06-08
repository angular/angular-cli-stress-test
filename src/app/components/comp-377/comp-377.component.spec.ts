/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp377Component } from './comp-377.component';

describe('Comp377Component', () => {
  let component: Comp377Component;
  let fixture: ComponentFixture<Comp377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
