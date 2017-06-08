/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4369Component } from './comp-4369.component';

describe('Comp4369Component', () => {
  let component: Comp4369Component;
  let fixture: ComponentFixture<Comp4369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
