/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1000Component } from './comp-1000.component';

describe('Comp1000Component', () => {
  let component: Comp1000Component;
  let fixture: ComponentFixture<Comp1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
