/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2414Component } from './comp-2414.component';

describe('Comp2414Component', () => {
  let component: Comp2414Component;
  let fixture: ComponentFixture<Comp2414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
