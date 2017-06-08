/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2810Component } from './comp-2810.component';

describe('Comp2810Component', () => {
  let component: Comp2810Component;
  let fixture: ComponentFixture<Comp2810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
