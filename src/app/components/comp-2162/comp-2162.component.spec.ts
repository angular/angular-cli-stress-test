/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2162Component } from './comp-2162.component';

describe('Comp2162Component', () => {
  let component: Comp2162Component;
  let fixture: ComponentFixture<Comp2162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
