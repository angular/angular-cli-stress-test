/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4699Component } from './comp-4699.component';

describe('Comp4699Component', () => {
  let component: Comp4699Component;
  let fixture: ComponentFixture<Comp4699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
