/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2835Component } from './comp-2835.component';

describe('Comp2835Component', () => {
  let component: Comp2835Component;
  let fixture: ComponentFixture<Comp2835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
