/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2468Component } from './comp-2468.component';

describe('Comp2468Component', () => {
  let component: Comp2468Component;
  let fixture: ComponentFixture<Comp2468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
