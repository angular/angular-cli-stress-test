/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp848Component } from './comp-848.component';

describe('Comp848Component', () => {
  let component: Comp848Component;
  let fixture: ComponentFixture<Comp848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
