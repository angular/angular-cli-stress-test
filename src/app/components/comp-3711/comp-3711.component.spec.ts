/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3711Component } from './comp-3711.component';

describe('Comp3711Component', () => {
  let component: Comp3711Component;
  let fixture: ComponentFixture<Comp3711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
