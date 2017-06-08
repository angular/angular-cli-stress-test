/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2311Component } from './comp-2311.component';

describe('Comp2311Component', () => {
  let component: Comp2311Component;
  let fixture: ComponentFixture<Comp2311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
