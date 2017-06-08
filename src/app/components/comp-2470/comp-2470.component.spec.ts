/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2470Component } from './comp-2470.component';

describe('Comp2470Component', () => {
  let component: Comp2470Component;
  let fixture: ComponentFixture<Comp2470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
