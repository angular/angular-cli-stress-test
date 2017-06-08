/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2491Component } from './comp-2491.component';

describe('Comp2491Component', () => {
  let component: Comp2491Component;
  let fixture: ComponentFixture<Comp2491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
