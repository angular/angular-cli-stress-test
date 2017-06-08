/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4438Component } from './comp-4438.component';

describe('Comp4438Component', () => {
  let component: Comp4438Component;
  let fixture: ComponentFixture<Comp4438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
