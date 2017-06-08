/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2501Component } from './comp-2501.component';

describe('Comp2501Component', () => {
  let component: Comp2501Component;
  let fixture: ComponentFixture<Comp2501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
