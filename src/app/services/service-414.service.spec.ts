/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service414Service } from './service-414.service';

describe('Service414Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service414Service]
    });
  });

  it('should ...', inject([Service414Service], (service: Service414Service) => {
    expect(service).toBeTruthy();
  }));
});
