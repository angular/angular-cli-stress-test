/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp136Component } from './comp-136.component';

describe('Comp136Component', () => {
  let component: Comp136Component;
  let fixture: ComponentFixture<Comp136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
