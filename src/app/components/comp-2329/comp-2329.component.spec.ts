/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2329Component } from './comp-2329.component';

describe('Comp2329Component', () => {
  let component: Comp2329Component;
  let fixture: ComponentFixture<Comp2329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
