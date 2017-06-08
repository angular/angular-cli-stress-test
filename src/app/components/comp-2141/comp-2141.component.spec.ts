/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2141Component } from './comp-2141.component';

describe('Comp2141Component', () => {
  let component: Comp2141Component;
  let fixture: ComponentFixture<Comp2141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
