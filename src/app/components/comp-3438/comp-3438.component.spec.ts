/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3438Component } from './comp-3438.component';

describe('Comp3438Component', () => {
  let component: Comp3438Component;
  let fixture: ComponentFixture<Comp3438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
