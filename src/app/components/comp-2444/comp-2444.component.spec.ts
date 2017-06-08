/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2444Component } from './comp-2444.component';

describe('Comp2444Component', () => {
  let component: Comp2444Component;
  let fixture: ComponentFixture<Comp2444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
