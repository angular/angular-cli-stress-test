/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2350Component } from './comp-2350.component';

describe('Comp2350Component', () => {
  let component: Comp2350Component;
  let fixture: ComponentFixture<Comp2350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
