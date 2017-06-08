/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp32Component } from './comp-32.component';

describe('Comp32Component', () => {
  let component: Comp32Component;
  let fixture: ComponentFixture<Comp32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
