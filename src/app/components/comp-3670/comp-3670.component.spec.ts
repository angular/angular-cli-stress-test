/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3670Component } from './comp-3670.component';

describe('Comp3670Component', () => {
  let component: Comp3670Component;
  let fixture: ComponentFixture<Comp3670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
