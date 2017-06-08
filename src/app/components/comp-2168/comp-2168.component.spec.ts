/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2168Component } from './comp-2168.component';

describe('Comp2168Component', () => {
  let component: Comp2168Component;
  let fixture: ComponentFixture<Comp2168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
