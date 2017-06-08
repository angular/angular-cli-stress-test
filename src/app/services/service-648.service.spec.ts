/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service648Service } from './service-648.service';

describe('Service648Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service648Service]
    });
  });

  it('should ...', inject([Service648Service], (service: Service648Service) => {
    expect(service).toBeTruthy();
  }));
});
