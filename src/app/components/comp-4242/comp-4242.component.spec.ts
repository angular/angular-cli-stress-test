/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4242Component } from './comp-4242.component';

describe('Comp4242Component', () => {
  let component: Comp4242Component;
  let fixture: ComponentFixture<Comp4242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
