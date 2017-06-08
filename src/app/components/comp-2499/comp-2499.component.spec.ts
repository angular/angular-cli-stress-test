/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2499Component } from './comp-2499.component';

describe('Comp2499Component', () => {
  let component: Comp2499Component;
  let fixture: ComponentFixture<Comp2499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
