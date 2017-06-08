/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2571Component } from './comp-2571.component';

describe('Comp2571Component', () => {
  let component: Comp2571Component;
  let fixture: ComponentFixture<Comp2571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
