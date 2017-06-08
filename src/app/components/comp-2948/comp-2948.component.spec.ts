/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2948Component } from './comp-2948.component';

describe('Comp2948Component', () => {
  let component: Comp2948Component;
  let fixture: ComponentFixture<Comp2948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
