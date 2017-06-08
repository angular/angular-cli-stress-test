/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2967Component } from './comp-2967.component';

describe('Comp2967Component', () => {
  let component: Comp2967Component;
  let fixture: ComponentFixture<Comp2967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
