/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service362Service } from './service-362.service';

describe('Service362Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service362Service]
    });
  });

  it('should ...', inject([Service362Service], (service: Service362Service) => {
    expect(service).toBeTruthy();
  }));
});
