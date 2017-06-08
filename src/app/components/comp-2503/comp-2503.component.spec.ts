/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2503Component } from './comp-2503.component';

describe('Comp2503Component', () => {
  let component: Comp2503Component;
  let fixture: ComponentFixture<Comp2503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
