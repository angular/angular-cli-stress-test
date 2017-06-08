/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2177Component } from './comp-2177.component';

describe('Comp2177Component', () => {
  let component: Comp2177Component;
  let fixture: ComponentFixture<Comp2177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
