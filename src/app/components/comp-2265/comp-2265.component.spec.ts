/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2265Component } from './comp-2265.component';

describe('Comp2265Component', () => {
  let component: Comp2265Component;
  let fixture: ComponentFixture<Comp2265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
