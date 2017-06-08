/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2037Component } from './comp-2037.component';

describe('Comp2037Component', () => {
  let component: Comp2037Component;
  let fixture: ComponentFixture<Comp2037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
