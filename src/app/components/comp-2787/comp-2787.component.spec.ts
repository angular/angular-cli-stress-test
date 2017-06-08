/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2787Component } from './comp-2787.component';

describe('Comp2787Component', () => {
  let component: Comp2787Component;
  let fixture: ComponentFixture<Comp2787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
