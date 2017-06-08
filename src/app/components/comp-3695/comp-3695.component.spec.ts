/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3695Component } from './comp-3695.component';

describe('Comp3695Component', () => {
  let component: Comp3695Component;
  let fixture: ComponentFixture<Comp3695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
