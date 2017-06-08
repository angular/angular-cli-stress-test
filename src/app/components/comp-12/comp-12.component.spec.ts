/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp12Component } from './comp-12.component';

describe('Comp12Component', () => {
  let component: Comp12Component;
  let fixture: ComponentFixture<Comp12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
