/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4410Component } from './comp-4410.component';

describe('Comp4410Component', () => {
  let component: Comp4410Component;
  let fixture: ComponentFixture<Comp4410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
