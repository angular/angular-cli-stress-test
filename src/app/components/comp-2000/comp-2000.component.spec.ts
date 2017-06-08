/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2000Component } from './comp-2000.component';

describe('Comp2000Component', () => {
  let component: Comp2000Component;
  let fixture: ComponentFixture<Comp2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
