/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2507Component } from './comp-2507.component';

describe('Comp2507Component', () => {
  let component: Comp2507Component;
  let fixture: ComponentFixture<Comp2507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
