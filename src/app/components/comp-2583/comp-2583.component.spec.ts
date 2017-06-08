/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2583Component } from './comp-2583.component';

describe('Comp2583Component', () => {
  let component: Comp2583Component;
  let fixture: ComponentFixture<Comp2583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
