/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2330Component } from './comp-2330.component';

describe('Comp2330Component', () => {
  let component: Comp2330Component;
  let fixture: ComponentFixture<Comp2330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
