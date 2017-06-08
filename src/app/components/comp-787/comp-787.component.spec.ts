/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp787Component } from './comp-787.component';

describe('Comp787Component', () => {
  let component: Comp787Component;
  let fixture: ComponentFixture<Comp787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
