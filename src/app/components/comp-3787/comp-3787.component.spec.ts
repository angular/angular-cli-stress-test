/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3787Component } from './comp-3787.component';

describe('Comp3787Component', () => {
  let component: Comp3787Component;
  let fixture: ComponentFixture<Comp3787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
