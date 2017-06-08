/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp641Component } from './comp-641.component';

describe('Comp641Component', () => {
  let component: Comp641Component;
  let fixture: ComponentFixture<Comp641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
