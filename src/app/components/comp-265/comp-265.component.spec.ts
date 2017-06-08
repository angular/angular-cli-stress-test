/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp265Component } from './comp-265.component';

describe('Comp265Component', () => {
  let component: Comp265Component;
  let fixture: ComponentFixture<Comp265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
