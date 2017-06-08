/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service442Service } from './service-442.service';

describe('Service442Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service442Service]
    });
  });

  it('should ...', inject([Service442Service], (service: Service442Service) => {
    expect(service).toBeTruthy();
  }));
});
